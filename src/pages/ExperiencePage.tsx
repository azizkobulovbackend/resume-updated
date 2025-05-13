
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ExperiencePage = () => {
  const experiences = [
    {
      id: 1,
      company: 'AGROBANK',
      location: 'Tashkent, agrobank.uz/uz',
      position: 'Backend NodeJS Developer',
      period: 'December 2024 — Present',
      duration: '6 months',
      responsibilities: [
        'Optimization and creation of new functionality in the Agrobank Mobile application',
        'Troubleshooting issues, integrating UzCard/Humo, and implementing Golden Crown in the Agrobank Mobile application',
        'Created ecosystem (admin part) of the Agrobank Mobile application for various bank departments',
        'Added useful features such as transaction history, client information in excel files, transaction blocking/cancellation'
      ]
    },
    {
      id: 2,
      company: 'ENTER Engineering Pte. LTD',
      location: 'Tashkent, enter-engineering.uz',
      position: 'Supply Control Specialist',
      period: 'January 2024 — July 2024',
      duration: '7 months',
      description: 'Construction, real estate, operation, design',
      responsibilities: [
        'Industrial construction',
        'Construction of oil and gas industry facilities',
        'Controlling the entire process of material delivery from suppliers to the company warehouse for further operation in construction'
      ]
    }
  ];

  return (
    <div className="page-transition">
      <div className="section-container">
        <h1 className="text-4xl font-bold mb-4">Work Experience</h1>
        <p className="text-muted-foreground mb-12">
          My professional journey and accomplishments.
        </p>
        
        <div className="relative space-y-12">
          {/* Vertical timeline line */}
          <div className="absolute left-6 top-2 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          {/* Experience cards */}
          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative">
              {/* Timeline dot */}
              <div className="absolute left-6 top-6 w-3 h-3 rounded-full bg-primary -translate-x-1.5 hidden md:block"></div>
              
              <div className="md:ml-16">
                <Card>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <div>
                        <CardTitle className="text-xl">{exp.company}</CardTitle>
                        <CardDescription>{exp.location}</CardDescription>
                      </div>
                      <div className="text-right text-muted-foreground text-sm">
                        <div>{exp.period}</div>
                        <div>{exp.duration}</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-lg">{exp.position}</h3>
                      {exp.description && <p className="text-sm text-muted-foreground">{exp.description}</p>}
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.responsibilities.map((resp, i) => (
                          <li key={i}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
