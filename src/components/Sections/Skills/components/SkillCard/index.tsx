import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../Card'
import Image from 'next/image'
import { HOSTNAME } from '@/lib/drive'
import { Category } from '@/types'

const SkillCard: React.FC<{ category: Category }> = ({ category }) => {
  return (
    <div key={category.category}>
      <Card className="bg-stone-800 border-stone-700 overflow-hidden">
        <CardHeader>
          <CardTitle className="text-stone-100">{category.category}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-5 gap-6">
            {category.skills.map((skill) => (
              <div key={skill.name} className="relative">
                <div className="flex flex-col items-center text-center">
                  <Image
                    width={50}
                    height={50}
                    src={HOSTNAME + skill.image}
                    alt={skill.name}
                    className="w-6 h-6"
                  />

                  <span className="text-sm mt-2 font-medium text-stone-300">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default SkillCard
