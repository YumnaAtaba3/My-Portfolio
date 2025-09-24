import React from "react";
import { Code, Smartphone, Globe, Award, Users, Clock } from "lucide-react";

//  Info Card
interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}
const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => (
  <div className="glass-card p-6 rounded-2xl">
    <h4 className="text-lg font-semibold text-foreground mb-3">{title}</h4>
    {children}
  </div>
);

// Highlight Card
interface HighlightCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}
const HighlightCard: React.FC<HighlightCardProps> = ({
  icon: Icon,
  title,
  description,
}) => (
  <div className="glass-card p-6 rounded-2xl hover-lift">
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 circle-primary flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </div>
  </div>
);

// Stat Card
interface StatCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}
const StatCard: React.FC<StatCardProps> = ({ icon: Icon, label, value }) => (
  <div className="glass-card p-6 rounded-2xl text-center hover-scale">
    <div className="w-12 h-12 circle-accent mx-auto mb-4 flex items-center justify-center">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <div className="text-2xl font-bold gradient-text mb-2">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const About: React.FC = () => {

  const stats = [
    { icon: Code, label: "Projects Completed", value: "6+" },
    { icon: Clock, label: "Years Experience", value: "2+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: Users, label: "Happy Clients", value: "10+" },
  ];

  const highlights = [
    {
      icon: Globe,
      title: "Web Development",
      description:
        "Expert in React.js, TypeScript, and modern web technologies",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Cross-platform mobile apps using Flutter and Dart",
    },
    {
      icon: Code,
      title: "Frontend Excellence",
      description:
        "Creating responsive, accessible, and performant user interfaces",
    },
  ];

  return (
    <section id="about" className="section-spacing bg-surface">
      <div className="section-container">
        {/* Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-display gradient-text mb-6">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I am a detail-oriented Frontend Developer with over 2 years of
            hands-on experience in designing, developing, and maintaining
            responsive web and mobile applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column */}
          <div className="animate-slide-up space-y-6">
            <h3 className="text-heading text-foreground">
              Passionate About Creating Digital Experiences
            </h3>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My expertise spans React.js, Flutter, JavaScript, and
                TypeScript, with a strong foundation in UI/UX design, RESTful
                API integration, and Agile methodologies.
              </p>
              <p>
                I am passionate about continuous learning and delivering
                user-focused solutions, aiming to contribute to innovative teams
                and impactful projects.
              </p>
              <p>
                Currently pursuing a Bachelor's degree in Information Technology
                Engineering at Damascus University with an 83% GPA, expected
                graduation in 2026.
              </p>
            </div>

            {/* Education */}
            <InfoCard title="Education">
              <div className="space-y-2">
                <p className="font-medium text-foreground">
                  Bachelor of Information Technology Engineering
                </p>
                <p className="text-sm text-muted-foreground">
                  Damascus University • 2021 - 2026
                </p>
                <p className="text-sm text-muted-foreground">GPA: 83%</p>
              </div>
            </InfoCard>

            {/* Languages */}
            <InfoCard title="Languages">
              <div className="flex gap-4">
                <div className="flex-1">
                  <p className="font-medium text-foreground">Arabic</p>
                  <p className="text-sm text-muted-foreground">Native</p>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">English</p>
                  <p className="text-sm text-muted-foreground">Advanced</p>
                </div>
              </div>
            </InfoCard>
          </div>

          {/* Right Column */}
          <div className="space-y-8 animate-scale-in">
            {/* Highlights */}
            <div className="space-y-6">
              {highlights.map((item, i) => (
                <HighlightCard key={i} {...item} />
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <StatCard key={i} {...stat} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
