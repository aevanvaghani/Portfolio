'use client';

import { useEffect, useRef } from 'react';

export default function TechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();

    // Constants for the animation
    const particles: Particle[] = [];
    const gridLines: GridLine[] = [];
    const codeLines: CodeLine[] = [];
    const NUM_PARTICLES = 50;
    const NUM_GRID_LINES = 15;
    const NUM_CODE_LINES = 25;

    // Create particles
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(new Particle(canvas));
    }

    // Create grid lines
    for (let i = 0; i < NUM_GRID_LINES; i++) {
      gridLines.push(new GridLine(canvas));
    }

    // Create code lines
    for (let i = 0; i < NUM_CODE_LINES; i++) {
      codeLines.push(new CodeLine(canvas));
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dark background with gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, 'rgba(10, 10, 20, 0.9)');
      gradient.addColorStop(1, 'rgba(5, 5, 15, 0.95)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid
      gridLines.forEach(line => {
        line.draw(ctx);
        line.update();
      });

      // Draw code lines
      codeLines.forEach(line => {
        line.draw(ctx);
        line.update();
      });

      // Draw particles
      particles.forEach(particle => {
        particle.draw(ctx);
        particle.update();
      });

      // Draw circuit patterns
      drawCircuitPatterns(ctx, canvas);

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-60"
      style={{ pointerEvents: 'none' }}
    />
  );
}

// Particle class for floating dots with glow
class Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  canvas: HTMLCanvasElement;
  opacity: number;
  glowSize: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.3;
    this.glowSize = Math.random() * 15 + 5;
    
    // Colors from blue/purple/green neon palette
    const colors = [
      'rgba(0, 180, 255, 0.8)',   // Neon blue
      'rgba(140, 0, 255, 0.8)',   // Neon purple
      'rgba(0, 255, 140, 0.8)',   // Neon green
      'rgba(60, 120, 255, 0.8)'   // Electric blue
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Boundary checking with wrapping
    if (this.x > this.canvas.width + 10) this.x = -10;
    else if (this.x < -10) this.x = this.canvas.width + 10;
    if (this.y > this.canvas.height + 10) this.y = -10;
    else if (this.y < -10) this.y = this.canvas.height + 10;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    
    // Draw glow
    const gradient = ctx.createRadialGradient(
      this.x, this.y, 0,
      this.x, this.y, this.glowSize
    );
    gradient.addColorStop(0, this.color);
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
    
    ctx.globalAlpha = this.opacity * 0.3;
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.glowSize, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw particle
    ctx.globalAlpha = this.opacity;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }
}

// Grid line class for digital grid effect
class GridLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  opacity: number;
  speed: number;
  direction: 'horizontal' | 'vertical';
  canvas: HTMLCanvasElement;
  pulse: number;
  pulseSpeed: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.direction = Math.random() > 0.5 ? 'horizontal' : 'vertical';
    this.speed = Math.random() * 0.5 + 0.1;
    this.opacity = Math.random() * 0.15 + 0.05;
    this.pulse = 0;
    this.pulseSpeed = Math.random() * 0.02 + 0.01;
    
    // Initial position
    this.resetPosition();
    
    // Colors in the blue/purple theme
    const colors = [
      'rgba(0, 150, 255, 0.7)',   // Blue
      'rgba(120, 0, 255, 0.7)',   // Purple
      'rgba(0, 255, 150, 0.7)',   // Green
      'rgba(60, 170, 255, 0.7)'   // Light blue
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }

  resetPosition() {
    if (this.direction === 'horizontal') {
      this.y1 = this.y2 = Math.random() * this.canvas.height;
      this.x1 = 0;
      this.x2 = this.canvas.width;
    } else {
      this.x1 = this.x2 = Math.random() * this.canvas.width;
      this.y1 = 0;
      this.y2 = this.canvas.height;
    }
  }

  update() {
    // Make the lines move
    if (this.direction === 'horizontal') {
      this.y1 += this.speed;
      this.y2 += this.speed;
      if (this.y1 > this.canvas.height) {
        this.resetPosition();
        this.y1 = this.y2 = 0;
      }
    } else {
      this.x1 += this.speed;
      this.x2 += this.speed;
      if (this.x1 > this.canvas.width) {
        this.resetPosition();
        this.x1 = this.x2 = 0;
      }
    }
    
    // Pulse effect for opacity
    this.pulse += this.pulseSpeed;
    if (this.pulse > Math.PI * 2) this.pulse = 0;
  }

  draw(ctx: CanvasRenderingContext2D) {
    const pulsingOpacity = this.opacity * (0.6 + 0.4 * Math.sin(this.pulse));
    
    ctx.save();
    ctx.strokeStyle = this.color;
    ctx.globalAlpha = pulsingOpacity;
    ctx.lineWidth = 1;
    
    // Draw the line with a subtle glow
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 5;
    
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
    
    ctx.restore();
  }
}

// Code line class for matrix-like falling code
class CodeLine {
  x: number;
  y: number;
  length: number;
  speed: number;
  characters: string[];
  color: string;
  canvas: HTMLCanvasElement;
  opacity: number;
  fadeSpeed: number;
  characterSize: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height - 200;
    this.length = Math.floor(Math.random() * 15) + 5;
    this.speed = Math.random() * 2 + 1;
    this.characters = [];
    this.opacity = Math.random() * 0.5 + 0.2;
    this.fadeSpeed = Math.random() * 0.01 + 0.005;
    this.characterSize = Math.floor(Math.random() * 6) + 8;
    
    // Colors in the blue/purple theme
    const colors = [
      'rgba(0, 200, 255, 0.8)',   // Bright blue
      'rgba(160, 0, 255, 0.8)',   // Bright purple
      'rgba(0, 255, 160, 0.8)',   // Bright green
      'rgba(100, 210, 255, 0.8)'  // Cyan
    ];
    this.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Generate random characters (binary, hex, or code symbols)
    this.generateCharacters();
  }

  generateCharacters() {
    const codeChars = '01'.split('');
    for (let i = 0; i < this.length; i++) {
      this.characters.push(codeChars[Math.floor(Math.random() * codeChars.length)]);
    }
  }

  update() {
    this.y += this.speed;
    
    // Reset when out of screen
    if (this.y > this.canvas.height + 100) {
      this.y = -100;
      this.x = Math.random() * this.canvas.width;
      this.characters = [];
      this.generateCharacters();
    }
    
    // Randomly change some characters for animation effect
    if (Math.random() > 0.9) {
      const idx = Math.floor(Math.random() * this.characters.length);
      const codeChars = '01'.split('');
      this.characters[idx] = codeChars[Math.floor(Math.random() * codeChars.length)];
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = this.color;
    ctx.font = `${this.characterSize}px monospace`;
    ctx.shadowColor = this.color;
    ctx.shadowBlur = 5;
    ctx.globalAlpha = this.opacity;
    
    // Draw each character with fading effect
    for (let i = 0; i < this.characters.length; i++) {
      const charOpacity = 1 - (i / this.characters.length);
      ctx.globalAlpha = this.opacity * charOpacity;
      ctx.fillText(
        this.characters[i],
        this.x,
        this.y + (i * this.characterSize)
      );
    }
    
    ctx.restore();
  }
}

// Draw circuit patterns in the background
function drawCircuitPatterns(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  // Draw 2-3 circuit patterns at fixed positions
  const positions = [
    { x: canvas.width * 0.1, y: canvas.height * 0.8, size: 100 },
    { x: canvas.width * 0.8, y: canvas.height * 0.2, size: 120 },
    { x: canvas.width * 0.5, y: canvas.height * 0.5, size: 90 }
  ];
  
  positions.forEach(pos => {
    drawCircuitPattern(ctx, pos.x, pos.y, pos.size);
  });
}

// Helper to draw a single circuit pattern
function drawCircuitPattern(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.save();
  
  // Choose a color
  const colors = [
    'rgba(0, 150, 255, 0.4)',   // Blue
    'rgba(140, 0, 255, 0.4)',   // Purple
    'rgba(0, 255, 140, 0.4)'    // Green
  ];
  const color = colors[Math.floor(Math.random() * colors.length)];
  
  ctx.strokeStyle = color;
  ctx.lineWidth = 1;
  ctx.shadowColor = color;
  ctx.shadowBlur = 5;
  ctx.globalAlpha = 0.3;
  
  // Draw circuit pattern
  ctx.beginPath();
  
  // Main circuit lines
  ctx.moveTo(x - size/2, y);
  ctx.lineTo(x + size/2, y);
  ctx.moveTo(x, y - size/2);
  ctx.lineTo(x, y + size/2);
  
  // Add some random connecting lines
  for (let i = 0; i < 5; i++) {
    const x1 = x + Math.random() * size - size/2;
    const y1 = y + Math.random() * size - size/2;
    const x2 = x + Math.random() * size - size/2;
    const y2 = y + Math.random() * size - size/2;
    
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
  }
  
  // Add some nodes
  for (let i = 0; i < 3; i++) {
    const nx = x + Math.random() * size - size/2;
    const ny = y + Math.random() * size - size/2;
    const radius = Math.random() * 5 + 2;
    
    ctx.moveTo(nx + radius, ny);
    ctx.arc(nx, ny, radius, 0, Math.PI * 2);
  }
  
  ctx.stroke();
  ctx.restore();
} 