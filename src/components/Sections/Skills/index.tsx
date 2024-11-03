'use client'
import React from 'react'
import { theSecrets } from '@/app/fonts'
import SkillCard from './components/SkillCard'
import { getSkillsService } from '@/components/Sections/Skills/services'
import { Category } from '@/types'
import { Show } from '@/components/ui/Show'
import { Skeleton } from '@/components/ui/Skeleton'

const Skills = () => {
  const [loading, setLoading] = React.useState(true)
  const [skillsData, setSkillsData] = React.useState<Category[]>([])

  React.useEffect(() => {
    const getSkills = async () => {
      setLoading(true)
      const skills = await getSkillsService()
      setSkillsData(skills || [])

      setLoading(false)
    }

    getSkills().then()
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1
        className={`text-[3rem] md:text-[5rem] mt-16 text-center font-medium ${theSecrets.className}`}
      >
        My Skills
      </h1>

      <div className="h-full w-full flex-grow flex items-center justify-center">
        <div className="container p-10 md:p-20 mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Show when={loading}>
            <Show.Then>
              {[...Array(4)].map((_, index) => (
                <Skeleton className="w-full h-40" />
              ))}
            </Show.Then>

            <Show.Else>
              {skillsData.map((category) => (
                <SkillCard key={category.category} category={category} />
              ))}
            </Show.Else>
          </Show>
        </div>
      </div>
    </div>
  )
}

export default Skills
