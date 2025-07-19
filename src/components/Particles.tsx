// Simple animated background as an alternative to particles
export function ParticleBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5"></div>
      
      {/* Animated floating elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
      <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-primary/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-primary/25 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
    </div>
  );
}