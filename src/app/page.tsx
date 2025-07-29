import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section
        id="hero"
        className="pt-20 lg:pt-24 min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-purple-50/30"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12 max-w-5xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold text-slate-900 leading-tight">
                  Transform Your Brand with
                  <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                    AI-Powered Marketing
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                  ADmyBRAND AI Suite helps you create, manage, and optimize your
                  marketing campaigns with cutting-edge artificial intelligence.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="text-lg px-10 py-6 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-700 hover:via-purple-800 hover:to-purple-900 text-white font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
              >
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-6 border-2 border-slate-300 text-slate-700 hover:border-purple-300 hover:text-purple-700 hover:bg-purple-50 font-semibold transition-all duration-300"
              >
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center justify-center space-x-12 text-sm text-slate-500">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg"></div>
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg"></div>
                <span className="font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-emerald-500 rounded-full shadow-lg"></div>
                <span className="font-medium">Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 lg:py-32 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 bg-clip-text text-transparent">
                Scale Your Brand
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful AI tools designed to help you create, manage, and
              optimize your marketing campaigns with unprecedented efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl text-slate-900">
                  AI Content Generation
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Create compelling content in seconds with our advanced AI
                  writing assistant.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Generate blog posts, social media content, email campaigns,
                  and more with just a few clicks.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Analytics & Insights
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Get deep insights into your marketing performance with
                  AI-powered analytics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Track ROI, identify trends, and optimize your campaigns with
                  real-time data and AI recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-2xl transition-all duration-300 border-0 shadow-xl bg-gradient-to-br from-white to-slate-50/50">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                    />
                  </svg>
                </div>
                <CardTitle className="text-xl text-slate-900">
                  Automated Campaigns
                </CardTitle>
                <CardDescription className="text-base text-slate-600">
                  Set up and run marketing campaigns automatically with
                  intelligent scheduling.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600">
                  Automate your entire marketing workflow from content creation
                  to audience targeting and optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* More sections will be added here */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            More Sections Coming Soon
          </h2>
          <p className="text-slate-600">
            Pricing, testimonials, and more features will be added here.
          </p>
        </div>
      </section>
    </div>
  );
}
