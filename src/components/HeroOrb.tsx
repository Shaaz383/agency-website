"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { MotionValue } from "framer-motion";

interface HeroOrbProps {
  scrollYProgress?: MotionValue<number>;
}

export default function HeroOrb({ scrollYProgress }: HeroOrbProps) {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hostRef.current) return;

    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.z = 4.2;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);

    hostRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1.6, 48, 48);

    // Start with Black & White (Gray)
    const startColor = new THREE.Color(0x444444);
    // End with a vibrant brand color (e.g., Electric Blue or multiple steps)
    const endColor = new THREE.Color(0x3b82f6); // Tailwind blue-500

    const material = new THREE.MeshBasicMaterial({
      color: startColor,
      wireframe: true,
    });
    const orb = new THREE.Mesh(geometry, material);
    scene.add(orb);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    let frameId = 0;
    const render = () => {
      // Rotation
      if (!prefersReduced) {
        orb.rotation.y += 0.0025;
        orb.rotation.x += 0.001;
      }

      // Color Transition based on Scroll
      if (scrollYProgress) {
        const progress = scrollYProgress.get() || 0;

        // Example: Interpolate multiple colors if desired, 
        // or simple lerp for "filling color".
        // Let's do a 3-step transition if user wants "different color each time"
        // 0.0 - 0.5: Gray -> Blue
        // 0.5 - 1.0: Blue -> Purple

        const color1 = new THREE.Color(0x444444); // Gray
        const color2 = new THREE.Color(0x3b82f6); // Blue
        const color3 = new THREE.Color(0xa855f7); // Purple

        if (progress < 0.5) {
          const t = progress * 2; // Map 0-0.5 to 0-1
          material.color.lerpColors(color1, color2, t);
        } else {
          const t = (progress - 0.5) * 2; // Map 0.5-1.0 to 0-1
          material.color.lerpColors(color2, color3, t);
        }
      }

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(render);
    };

    const handleResize = () => {
      if (!hostRef.current) return;
      const { width, height } = hostRef.current.getBoundingClientRect();
      renderer.setSize(width, height);
      camera.aspect = width / height || 1;
      camera.updateProjectionMatrix();
    };

    handleResize();
    frameId = requestAnimationFrame(render);
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement && renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [scrollYProgress]);

  return <div ref={hostRef} className="h-full w-full" aria-hidden="true" />;
}
