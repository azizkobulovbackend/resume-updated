
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutPage = () => {
  const languages = [
    { name: 'Uzbek', level: 'Native' },
    { name: 'English', level: 'C1 — Advanced' },
    { name: 'Russian', level: 'C2 — Expert' },
  ];

  const technicalSkills = [
    'NodeJS', 'JavaScript', 'TypeScript', 'PostgreSQL', 'REST API', 
    'Git', 'GitHub', 'HTTP', 'HTTPS', 'SQL', 'Redis', 
    'WebSocket', 'OOP', 'Telegram Bot', 'NestJS', 'Databases', 'ORM'
  ];

  return (
    <div className="page-transition">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-12">About Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
              <Card>
                <CardContent className="pt-6">
                  <dl className="space-y-4">
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-medium text-muted-foreground min-w-32">Location:</dt>
                      <dd>Tashkent, Uzbekistan</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-medium text-muted-foreground min-w-32">Citizenship:</dt>
                      <dd>Uzbekistan</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-medium text-muted-foreground min-w-32">Relocation:</dt>
                      <dd>Willing to relocate, available for remote teams</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-medium text-muted-foreground min-w-32">Position:</dt>
                      <dd>Backend NodeJS Developer</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-medium text-muted-foreground min-w-32">Employment:</dt>
                      <dd>Full-time</dd>
                    </div>
                    <div className="flex flex-col sm:flex-row">
                      <dt className="font-medium text-muted-foreground min-w-32">Work Schedule:</dt>
                      <dd>Full day, remote work</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Education</h2>
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between">
                    <div>Inha University in Tashkent</div>
                    <div className="text-muted-foreground">2023</div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>BA in Logistics</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Languages</h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {languages.map((language) => (
                      <li key={language.name} className="flex justify-between items-center">
                        <span>{language.name}</span>
                        <span className="language-level">{language.level}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    I'm a backend developer with expertise in NodeJS, focused on building efficient and 
                    scalable server-side applications. My experience includes developing complex backend systems,
                    API integrations, and database optimization. I am passionate about clean code, best practices,
                    and continuous learning.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
