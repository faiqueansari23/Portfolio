'use client';

import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export default function Hero3DScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();

    const width = container.clientWidth || 400;
    const height = container.clientHeight || 400;

    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 1000);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;

    // Append canvas
    container.innerHTML = '';
    container.appendChild(renderer.domElement);
    setIsLoaded(true);

    // Root group that holds all objects
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // ==================== 3D MOBILE DEVICE ====================
    const phoneGroup = new THREE.Group();
    rootGroup.add(phoneGroup);

    // Phone body chassis
    const phoneWidth = 2.4;
    const phoneHeight = 4.6;
    const phoneDepth = 0.22;

    const bodyGeometry = new THREE.BoxGeometry(phoneWidth, phoneHeight, phoneDepth);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.85,
      roughness: 0.25,
    });
    const phoneBody = new THREE.Mesh(bodyGeometry, bodyMaterial);
    phoneGroup.add(phoneBody);

    // Phone frame rim / edge highlight
    const frameEdges = new THREE.EdgesGeometry(bodyGeometry);
    const frameMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.35,
    });
    const phoneFrame = new THREE.LineSegments(frameEdges, frameMaterial);
    phoneGroup.add(phoneFrame);

    // Front Screen
    const screenGeometry = new THREE.PlaneGeometry(phoneWidth - 0.18, phoneHeight - 0.3);
    const screenMaterial = new THREE.MeshStandardMaterial({
      color: 0x050814,
      metalness: 0.2,
      roughness: 0.1,
      emissive: 0x0c1328,
      emissiveIntensity: 0.4,
    });
    const screenMesh = new THREE.Mesh(screenGeometry, screenMaterial);
    screenMesh.position.z = phoneDepth / 2 + 0.005;
    phoneGroup.add(screenMesh);

    // Dynamic Island / notch
    const notchGeo = new THREE.PlaneGeometry(0.75, 0.16);
    const notchMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const notchMesh = new THREE.Mesh(notchGeo, notchMat);
    notchMesh.position.set(0, phoneHeight / 2 - 0.32, phoneDepth / 2 + 0.008);
    phoneGroup.add(notchMesh);

    // Screen UI lines (App representation)
    const uiLinesGroup = new THREE.Group();
    uiLinesGroup.position.z = phoneDepth / 2 + 0.007;
    phoneGroup.add(uiLinesGroup);

    // Card 1
    const card1Geo = new THREE.PlaneGeometry(1.8, 1.0);
    const card1Mat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.1,
      roughness: 0.3,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.15,
    });
    const card1 = new THREE.Mesh(card1Geo, card1Mat);
    card1.position.set(0, 0.6, 0);
    uiLinesGroup.add(card1);

    // Card 2
    const card2Geo = new THREE.PlaneGeometry(1.8, 0.8);
    const card2Mat = new THREE.MeshStandardMaterial({
      color: 0x111827,
      metalness: 0.1,
      roughness: 0.3,
      emissive: 0x6366f1,
      emissiveIntensity: 0.15,
    });
    const card2 = new THREE.Mesh(card2Geo, card2Mat);
    card2.position.set(0, -0.6, 0);
    uiLinesGroup.add(card2);

    // Bottom Navigation line
    const navBarGeo = new THREE.PlaneGeometry(1.6, 0.22);
    const navBarMat = new THREE.MeshBasicMaterial({ color: 0x1e293b });
    const navBar = new THREE.Mesh(navBarGeo, navBarMat);
    navBar.position.set(0, -1.8, 0);
    uiLinesGroup.add(navBar);

    // ==================== ORBITAL TECH RINGS ====================
    // Ring 1 (Cyan Orbit)
    const ring1Geo = new THREE.TorusGeometry(3.2, 0.025, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x38bdf8,
      emissiveIntensity: 0.6,
      transparent: true,
      opacity: 0.8,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    // Ring 2 (Purple Orbit)
    const ring2Geo = new THREE.TorusGeometry(3.7, 0.02, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0xa855f7,
      emissiveIntensity: 0.5,
      transparent: true,
      opacity: 0.65,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.y = Math.PI / 4;
    rootGroup.add(ring2);

    // Orbital satellite spheres
    const orb1Geo = new THREE.SphereGeometry(0.12, 16, 16);
    const orb1Mat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const orb1 = new THREE.Mesh(orb1Geo, orb1Mat);
    rootGroup.add(orb1);

    const orb2Geo = new THREE.SphereGeometry(0.09, 16, 16);
    const orb2Mat = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const orb2 = new THREE.Mesh(orb2Geo, orb2Mat);
    rootGroup.add(orb2);

    // ==================== LIGHTING ====================
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 8, 5);
    scene.add(keyLight);

    const cyanPoint = new THREE.PointLight(0x38bdf8, 3.5, 10);
    cyanPoint.position.set(-2.5, 1.5, 2.5);
    scene.add(cyanPoint);

    const purplePoint = new THREE.PointLight(0x818cf8, 2.8, 10);
    purplePoint.position.set(2.5, -2, 2.5);
    scene.add(purplePoint);

    // ==================== MOUSE INTERACTION ====================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 0.7;
      targetY = y * 0.7;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // ==================== INTERSECTION OBSERVER (PAUSE WHEN OFFSCREEN) ====================
    let isVisible = true;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(container);

    // ==================== RESIZE HANDLER ====================
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // ==================== ANIMATION LOOP ====================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isVisible) return;

      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse follow
      if (!prefersReducedMotion) {
        mouseX += (targetX - mouseX) * 0.05;
        mouseY += (targetY - mouseY) * 0.05;

        // Subtle floating movement
        phoneGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.12;
        phoneGroup.rotation.y = mouseX * 0.9 + Math.sin(elapsedTime * 0.8) * 0.08;
        phoneGroup.rotation.x = -mouseY * 0.9 + Math.cos(elapsedTime * 0.9) * 0.05;

        // Rotate orbital rings
        ring1.rotation.z = elapsedTime * 0.25;
        ring2.rotation.z = -elapsedTime * 0.2;

        // Satellite positions
        const angle1 = elapsedTime * 1.2;
        orb1.position.x = Math.cos(angle1) * 3.2;
        orb1.position.y = Math.sin(angle1) * 3.2 * Math.sin(Math.PI / 3);
        orb1.position.z = Math.sin(angle1) * 3.2 * Math.cos(Math.PI / 3);

        const angle2 = -elapsedTime * 0.9;
        orb2.position.x = Math.cos(angle2) * 3.7 * Math.cos(Math.PI / 4);
        orb2.position.y = Math.sin(angle2) * 3.7;
        orb2.position.z = Math.cos(angle2) * 3.7 * Math.sin(Math.PI / 4);
      }

      renderer.render(scene, camera);
    };

    animate();

    // ==================== CLEANUP ====================
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      observer.disconnect();

      // Dispose geometries & materials
      bodyGeometry.dispose();
      bodyMaterial.dispose();
      frameEdges.dispose();
      frameMaterial.dispose();
      screenGeometry.dispose();
      screenMaterial.dispose();
      notchGeo.dispose();
      notchMat.dispose();
      card1Geo.dispose();
      card1Mat.dispose();
      card2Geo.dispose();
      card2Mat.dispose();
      navBarGeo.dispose();
      navBarMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      orb1Geo.dispose();
      orb1Mat.dispose();
      orb2Geo.dispose();
      orb2Mat.dispose();

      renderer.dispose();
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] flex items-center justify-center">
      {/* Three.js container */}
      <div
        ref={containerRef}
        className={`w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        aria-label="Interactive 3D Mobile Device Scene"
      />

      {/* Subtle indicator caption below 3D */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none px-3 py-1 rounded-full bg-slate-900/60 backdrop-blur-md border border-white/10 text-[10px] text-slate-400 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        Interactive 3D • React Native Device
      </div>
    </div>
  );
}
