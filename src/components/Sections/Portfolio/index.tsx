'use client'
import React from 'react'
import { theSecrets } from '@/app/fonts'
import { Show } from '@/components/ui/Show'
import { Gallery } from 'react-grid-gallery'
import LoadingImage from '@/components/Sections/Portfolio/components/LoadingImage'
import { getPortfolioService } from '@/components/Sections/Portfolio/services'
import { PortfolioJoinSkill } from '@/types/portfolio'
import { HOSTNAME } from '@/lib/drive'
import Image from '@/components/Sections/Portfolio/components/Image'
import NextImage from 'next/image'
import PortfolioModal from '@/components/Sections/Portfolio/components/PortfolioModal'
import { useAtom } from 'jotai/index'
import { skillsMapAtom } from '@/app/atom/skills'
import { Skill } from '@/types'
import { Badge } from '@/components/ui/Badge'

const PLACEHOLD_IMAGE = {
  src: '/images/placeholder.png',
  width: 100,
  height: 50,
  caption: 'Placeholder',
}

const Portfolio = () => {
  const [open, setOpen] = React.useState(false)
  const [focusProject, setFocusProject] = React.useState<PortfolioJoinSkill>(
    {} as PortfolioJoinSkill
  )

  const [loading, setLoading] = React.useState(true)
  const [portfolioData, setPortfolioData] = React.useState<
    PortfolioJoinSkill[]
  >([])

  const [skillsMap] = useAtom(skillsMapAtom)

  React.useEffect(() => {
    const getPortfolio = async () => {
      setLoading(true)
      const portfolios = await getPortfolioService()
      setPortfolioData(
        portfolios.map((project) => {
          return {
            ...project,
            tags: project.tags.map((tag) => skillsMap[tag] || { name: tag }),
          }
        }) || []
      )
      setLoading(false)
    }

    if (Object.keys(skillsMap).length === 0) return

    getPortfolio().then()
  }, [skillsMap])

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1
        className={`text-[3rem] md:text-[5rem] mt-16 text-center font-medium ${theSecrets.className}`}
      >
        Portfolio
      </h1>

      <div className="block w-full relative px-10 md:px-20">
        <Show when={loading}>
          <Show.Then>
            <Gallery
              images={[...Array(10).fill(PLACEHOLD_IMAGE)]}
              thumbnailImageComponent={LoadingImage}
            />
          </Show.Then>

          <Show.Else>
            <Gallery
              onClick={(index: number) => {
                setFocusProject(portfolioData[index])
                setOpen(true)
              }}
              images={portfolioData.map((portfolio) => ({
                src: HOSTNAME + portfolio.image,
                width: 480,
                height: 270,
                customTags: portfolio.tags,
              }))}
              enableImageSelection={false}
              thumbnailImageComponent={Image}
            />
          </Show.Else>
        </Show>
      </div>

      <PortfolioModal
        open={open}
        onOpenChange={(isOpen: boolean) => setOpen(isOpen)}
        project={focusProject}
      />
    </div>
  )
}

export default Portfolio
