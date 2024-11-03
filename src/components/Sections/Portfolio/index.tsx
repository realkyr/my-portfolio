'use client'
import React from 'react'
import { theSecrets } from '@/app/fonts'
import { Show } from '@/components/ui/Show'
import { Gallery } from 'react-grid-gallery'
import LoadingImage from '@/components/Sections/Portfolio/components/LoadingImage'
import { getPortfolioService } from '@/components/Sections/Portfolio/services'
import { Portfolio as IPortfolio } from '@/types/portfolio'
import { HOSTNAME } from '@/lib/drive'
import Image from '@/components/Sections/Portfolio/components/Image'

const PLACEHOLD_IMAGE = {
  src: '/images/placeholder.png',
  width: 100,
  height: 50,
  caption: 'Placeholder',
}

const Portfolio = () => {
  const [loading, setLoading] = React.useState(true)
  const [portfolioData, setPortfolioData] = React.useState<IPortfolio[]>([])

  React.useEffect(() => {
    const getPortfolio = async () => {
      setLoading(true)
      const portfolios = await getPortfolioService()
      setPortfolioData(portfolios || [])
      setLoading(false)
    }

    getPortfolio().then()
  }, [])

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
              images={portfolioData.map((portfolio) => ({
                src: HOSTNAME + portfolio.image,
                width: 480,
                height: 270,
                tags: portfolio.tags,
                customOverlay: (
                  <div className="custom-overlay__caption">
                    <div>
                      {portfolio.description.length > 100
                        ? portfolio.description.slice(0, 100) + '...'
                        : portfolio.description}
                    </div>
                    {portfolio.tags &&
                      portfolio.tags.map((t, index) => (
                        <div key={index} className="custom-overlay__tag">
                          {t.value}
                        </div>
                      ))}
                  </div>
                ),
              }))}
              enableImageSelection={false}
              thumbnailImageComponent={Image}
            />
          </Show.Else>
        </Show>
      </div>
    </div>
  )
}

export default Portfolio
