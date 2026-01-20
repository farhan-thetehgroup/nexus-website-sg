/* eslint-disable no-undef */
import { useEffect, useRef } from "react";
import * as THREE from "three";

export const TechParticleField = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5)); // Reduced pixel ratio for better performance
    camera.position.z = 50;

    // Simplified particles - reduced count for better performance
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 400; // Reduced from 2000 to 400
    const posArray = new Float32Array(particlesCount * 3);
    const colorsArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      posArray[i] = (Math.random() - 0.5) * 120;
      posArray[i + 1] = (Math.random() - 0.5) * 120;
      posArray[i + 2] = (Math.random() - 0.5) * 100;

      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        // Cyber Cyan - #06b6d4
        colorsArray[i] = 0.02;
        colorsArray[i + 1] = 0.71;
        colorsArray[i + 2] = 0.83;
      } else if (colorChoice < 0.66) {
        // Tech Green - #10b981
        colorsArray[i] = 0.06;
        colorsArray[i + 1] = 0.73;
        colorsArray[i + 2] = 0.51;
      } else {
        // Brand Blue - #3b82f6
        colorsArray[i] = 0.23;
        colorsArray[i + 1] = 0.51;
        colorsArray[i + 2] = 0.96;
      }
    }

    particlesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(posArray, 3)
    );
    particlesGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colorsArray, 3)
    );

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(
      particlesGeometry,
      particlesMaterial
    );
    scene.add(particlesMesh);

    // Simplified network lines - reduced count
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x10b981,
      transparent: true,
      opacity: 0.1,
    });

    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];

    for (let i = 0; i < 30; i++) { // Reduced from 100 to 30
      const x1 = (Math.random() - 0.5) * 100;
      const y1 = (Math.random() - 0.5) * 100;
      const z1 = (Math.random() - 0.5) * 50;
      const x2 = x1 + (Math.random() - 0.5) * 20;
      const y2 = y1 + (Math.random() - 0.5) * 20;
      const z2 = z1 + (Math.random() - 0.5) * 20;

      linePositions.push(x1, y1, z1, x2, y2, z2);
    }

    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Removed complex 3D objects (aiBrain, cyberShield, enterpriseCube, rings) for better performance

    let scrollPosition = 0;
    let lastUpdate = 0;
    const throttleDelay = 100; // Throttle scroll updates

    const handleScroll = () => {
      const now = Date.now();
      if (now - lastUpdate > throttleDelay) {
        scrollPosition = window.scrollY;
        lastUpdate = now;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    const animate = () => {
      requestAnimationFrame(animate);
      const time = Date.now() * 0.0005; // Slower animation

      // Simplified particle animation
      particlesMesh.rotation.y += 0.0003;
      particlesMesh.position.y = scrollPosition * -0.01;

      // Simplified line animation
      lines.rotation.y += 0.0005;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};
