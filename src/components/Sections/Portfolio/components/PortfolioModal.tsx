import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/Dialog'
import { Badge } from '@/components/ui/Badge'
import { PortfolioJoinSkill } from '@/types/portfolio'
import Image from 'next/image'
import { HOSTNAME } from '@/lib/drive'
import { useAtom } from 'jotai'
import { skillsMapAtom } from '@/app/atom/skills'
import { Show } from '@/components/ui/Show'
import { Button } from '@/components/ui/Button'

interface PortfolioModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  project: PortfolioJoinSkill
}

export default function PortfolioModal({
  open,
  onOpenChange,
  project,
}: PortfolioModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-stone-800 text-snow border-stone-700">
        <DialogHeader>
          <DialogTitle className="text-stone-100">{project.name}</DialogTitle>
          {/*<DialogDescription className="text-stone-400">*/}
          {/*  A brief overview of my latest project.*/}
          {/*</DialogDescription>*/}
        </DialogHeader>
        <div className="mt-4 space-y-4 max-h-[70vh] overflow-y-auto">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
            <Image
              width={480}
              height={270}
              src={HOSTNAME + project.image}
              alt="Project Banner"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-snow">
              Project Description
            </h3>
            <p className="text-sm">{project.description}</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-snow">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags?.map((skill) => (
                <Badge
                  key={skill.key}
                  variant="secondary"
                  className="flex items-center gap-1 bg-stone-700 text-stone-100"
                >
                  <Show when={!!skill.image}>
                    <Show.Then>
                      <Image
                        src={HOSTNAME + skill.image}
                        width={15}
                        height={15}
                        alt={skill.name}
                      />
                    </Show.Then>
                  </Show>

                  {skill.name}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-snow">Related Link</h3>
            <div className="flex flex-wrap gap-2">
              {project.link?.map((link) => (
                <Badge
                  onClick={() => window.open(link.url, '_blank')}
                  key={link.name}
                  variant="secondary"
                  className="flex items-center gap-1 bg-stone-700 text-stone-100 cursor-pointer hover:bg-stone-900"
                >
                  {link.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/*  Footer CLose*/}

        <div className="flex justify-end mt-4">
          <Button
            className="bg-stone-700 text-snow hover:bg-stone-900"
            onClick={() => onOpenChange(false)}
          >
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
