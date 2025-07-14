import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Palette,
  Zap,
  Rocket,
  Sparkles,
  Github,
  ArrowRight,
} from "lucide-react";

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full animate-float animation-delay-1000"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-cyan-400/30 rounded-full animate-float animation-delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%239C92AC%22 fill-opacity=%220.05%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <Card className="w-full max-w-4xl backdrop-blur-xl bg-white/5 border-white/10 shadow-2xl relative z-10 animate-fade-in-up">
        <CardHeader className="text-center pb-8 relative">
          {/* Animated logo container */}
          <div className="flex justify-center mb-8 relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
              <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500 rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                <Rocket className="h-12 w-12 text-white animate-bounce-slow" />
              </div>
              <div className="absolute -top-2 -right-2 animate-spin-slow">
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </div>
            </div>
          </div>

          <CardTitle className="text-5xl md:text-6xl font-black bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 animate-fade-in-up animation-delay-200">
            Welcome Developer!
          </CardTitle>
          <CardDescription className="text-xl md:text-2xl text-gray-300 animate-fade-in-up animation-delay-400">
            Your modern stack is ready to build amazing things
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-10">
          {/* Animated tech badges */}
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up animation-delay-600">
            {[
              {
                name: "React 19",
                color: "from-blue-500 to-blue-600",
                delay: "0ms",
              },
              {
                name: "TypeScript",
                color: "from-blue-600 to-indigo-600",
                delay: "100ms",
              },
              {
                name: "Vite",
                color: "from-purple-500 to-purple-600",
                delay: "200ms",
              },
              {
                name: "Tailwind CSS",
                color: "from-cyan-500 to-teal-500",
                delay: "300ms",
              },
              {
                name: "shadcn/ui",
                color: "from-violet-500 to-purple-600",
                delay: "400ms",
              },
            ].map((tech, index) => (
              <Badge
                key={index}
                className={`bg-gradient-to-r ${tech.color} hover:scale-110 text-white border-0 px-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in-up cursor-pointer`}
                style={{ animationDelay: tech.delay }}
              >
                {tech.name}
              </Badge>
            ))}
          </div>

          {/* Feature cards with stagger animation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up animation-delay-800">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Instant HMR with Vite",
                gradient: "from-yellow-400 to-orange-500",
                bgGradient: "from-yellow-500/20 to-orange-600/20",
                borderGradient: "from-yellow-500/50 to-orange-500/50",
              },
              {
                icon: Palette,
                title: "Beautiful UI",
                description: "Tailwind + shadcn/ui",
                gradient: "from-pink-400 to-purple-500",
                bgGradient: "from-pink-500/20 to-purple-600/20",
                borderGradient: "from-pink-500/50 to-purple-500/50",
              },
              {
                icon: Code2,
                title: "Type Safe",
                description: "Full TypeScript support",
                gradient: "from-emerald-400 to-cyan-500",
                bgGradient: "from-emerald-500/20 to-cyan-600/20",
                borderGradient: "from-emerald-500/50 to-cyan-500/50",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`group text-center p-8 rounded-2xl bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm border border-transparent bg-clip-padding hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-in-up`}
                style={{
                  animationDelay: `${800 + index * 200}ms`,
                  backgroundImage: `linear-gradient(135deg, ${feature.bgGradient}), linear-gradient(135deg, ${feature.borderGradient})`,
                  backgroundOrigin: "border-box",
                  backgroundClip: "padding-box, border-box",
                }}
              >
                <div
                  className={`bg-gradient-to-r ${feature.gradient} rounded-2xl w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300`}
                >
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-8 animate-fade-in-up animation-delay-1400">
            <p className="text-gray-300 text-xl font-medium">
              Ready to create something extraordinary?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 hover:from-purple-700 hover:via-pink-700 hover:to-cyan-700 text-white border-0 px-8 py-4 text-lg font-bold shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 hover:scale-105 animate-pulse-slow"
              >
                <Rocket className="h-6 w-6 mr-3 group-hover:animate-bounce" />
                Start Building
                <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group border-2 border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-4 text-lg font-semibold backdrop-blur-sm hover:border-white/40 transition-all duration-300 hover:scale-105"
              >
                <Github className="h-5 w-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                View Docs
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePage;
