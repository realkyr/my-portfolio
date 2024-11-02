import { Card, CardContent, CardHeader, CardTitle } from "./Timeline.style"

type TimelineItem = {
  company: string,
  period: string,
  description: string
  position: string
}

export default function Timeline({ items }: { items?: TimelineItem[] } = { items: [] }) {
  const defaultItems: TimelineItem[] = [
    {
      position: "Software Engineer",
      period: "2021 - Present",
      description: "Led development of a new product feature that increased user engagement by 25%.",
      company: "XXX",
    }
  ]

  const timelineItems = items?.length ? items : defaultItems

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative max-w-md mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-0 h-full w-0.5 bg-stone-700"
          aria-hidden="true"
        />

        {timelineItems.map((item, index) => (
          <div key={index} className="mb-8 flex">
            <div className="flex flex-col items-center mr-4">
              <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-stone-900 bg-stone-700 z-10">
                <div className="w-3 h-3 bg-stone-900 rounded-full" />
              </div>
            </div>
            <Card className="flex-grow">
              <CardHeader>
                <CardTitle className="text-lg">{item.company}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{item.period}, {item.position}</p>
                <p className="text-sm">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  )
}