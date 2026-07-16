import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeHeroBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(1.35, 2);
    const material = new THREE.MeshStandardMaterial({
      color: '#14B8A6',
      roughness: 0.42,
      metalness: 0.18,
      wireframe: true
    });
    const shape = new THREE.Mesh(geometry, material);
    shape.position.set(1.35, 0.05, 0);
    scene.add(shape);

    const particles = new THREE.BufferGeometry();
    const particleCount = 120;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 7;
      positions[i + 1] = (Math.random() - 0.5) * 4;
      positions[i + 2] = (Math.random() - 0.5) * 4;
    }
    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({ color: '#F97316', size: 0.025, transparent: true, opacity: 0.75 });
    const particleField = new THREE.Points(particles, particleMaterial);
    scene.add(particleField);

    scene.add(new THREE.AmbientLight('#ffffff', 1.8));
    const light = new THREE.DirectionalLight('#ffffff', 2);
    light.position.set(3, 2, 4);
    scene.add(light);

    let frameId;
    const animate = () => {
      shape.rotation.x += 0.003;
      shape.rotation.y += 0.005;
      particleField.rotation.y -= 0.0015;
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      geometry.dispose();
      particles.dispose();
      material.dispose();
      particleMaterial.dispose();
      renderer.dispose();
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 h-full w-full opacity-80" aria-hidden="true" />;
}
