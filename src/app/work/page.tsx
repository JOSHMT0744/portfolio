import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Page() {
  const PROJECTS = [
    {
      name: 'Armature Labs',
      description: 'The AI Native Operating System for Regulated Science',
      liveLink: 'https://armaturelabs.ai',
      previewImage: '/armature.png',
    },
    {
      name: 'Blackwall',
      description: 'Alpha-zero inspired data auto-redactor to preserve maximum context for AI insights without leaking personal information',
      liveLink: 'https://devpost.com/software/blackwallai',
      previewImage: '/redaction_ui.jpeg',
      repoUrl: 'https://github.com/JOSHMT0744/shadowAIBlackwall'
    },
    {
      name: 'Artemis IV South Pole Landing Site Explorer',
      description: 'An interactive visualization tool for lunar south pole terrain and illumination data to support Artemis IV landing site selection.',
      previewImage: '/artemis_iv.webp',
      repoUrl: 'https://github.com/JOSHMT0744/adv_viz_coursework',
    },
    {
      name: 'Entropy-Regularisd Autonomous IoT System',
      description: 'Surprise-based BA-POMDP: Entropy-Regularized Value Iteration with Adaptive Learning',
      previewImage: '/deltaiot-abstraction.jpg',
      repoUrl: 'https://https://github.com/JOSHMT0744/L4Project',
    },
    {
      name: 'MerlinPDF',
      description: 'PDF to graph explanation converter',
      previewImage: '/merlin.svg',
      liveLink: 'https://devpost.com/software/merlin-hyfdw3',
      repoUrl: 'https://github.com/kemma011-209/MerlinPDF',
    },
    {
      name: 'Grade 8 Piano',
      description: 'Trinity Grade 8 Classical Piano',
      previewImage: '/piano.svg',
    },
  ]

  return (
    <>
      {PROJECTS.map((project, id) => {
        return (
          <div
            className="text-foreground bg-background w600:px-[30px] w400:px-4 border-r-4 border-b-4 border-r-black border-b-black p-8 py-10 w400:p-5 w400:py-6"
            key={id}
          >
            <div className="w800:w-full mx-auto w-3/4">
              <AspectRatio
                className="rounded-base shadow-shadow -bottom-[2px]! border-2 border-black overflow-hidden"
                ratio={2 / 1}
              >
                <img
                  className="rounded-base w-full h-full object-cover"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="mt-6 min-w-0">
                <h2 className="w700:text-2xl w450:text-xl w400:text-lg text-3xl font-bold">
                  {project.name}
                </h2>

                <p className="w450:text-base w400:text-sm mt-5 text-lg break-words">
                  {project.description}
                </p>

                <div className="w400:text-sm mt-6 w400:mt-4 grid grid-cols-2 w400:grid-cols-1 gap-4 w400:gap-3 text-base">
                  {project.liveLink && (
                    <a
                      className={`border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none ${!project.repoUrl ? 'col-span-2' : ''}`}
                      href={project.liveLink}
                      target="_blank"
                    >
                      Visit
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      className={`border-border text-main-foreground shadow-shadow rounded-base bg-main hover:translate-x-boxShadowX hover:translate-y-boxShadowY cursor-pointer border-2 px-4 py-2 text-center uppercase transition-all hover:shadow-none ${!project.liveLink ? 'col-span-2' : ''}`}
                      href={project.repoUrl}
                      target="_blank"
                    >
                      Github
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}
