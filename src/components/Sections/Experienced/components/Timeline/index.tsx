import {Card, CardContent, CardHeader, CardTitle} from "./Timeline.style"
import {Skeleton} from "@/components/ui/Skeleton";

type TimelineItem = {
  company: string,
  period: string,
  description: string
  position: string
}

export default function Timeline({items, loading }: { items?: TimelineItem[], loading?: boolean } = {items: []}) {
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
      <div className="relative max-w-xl mx-auto">
        {/* Vertical line */}
        <div
          className="absolute left-4 top-3 h-full w-0.5 bg-stone-700"
          aria-hidden="true"
        />

        {(loading ? [...Array(4)] : timelineItems).map((item, index) => (
          <div key={index} className="mb-8 flex">
            <div className="pt-3 flex flex-col items-center mr-4">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-stone-900 bg-stone-700 z-10">
                <div className="w-3 h-3 bg-stone-900 rounded-full"/>
              </div>
            </div>

            <div className="flex flex-col flex-grow">
              <Card className="mb-2 w-max">
                {loading ? <Skeleton className="h-6 w-36 bg-stone-700"/> :
                  <CardTitle className="text-lg inline">{item.period}</CardTitle>}
              </Card>

              <Card className="flex-grow">
                <CardHeader>
                  {loading ? <Skeleton className="h-6 w-3/4 bg-stone-700"/> :
                    <CardTitle className="text-lg">{item.company}</CardTitle>}
                </CardHeader>

                {
                  !loading && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{item.position}</p>
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  )
                }

                {
                  loading && (
                    <CardContent className="space-y-2">
                      <Skeleton className="h-4 w-1/4 bg-stone-700"/>
                      <Skeleton className="h-4 w-full bg-stone-700"/>
                      <Skeleton className="h-4 w-5/6 bg-stone-700"/>
                    </CardContent>
                  )
                }
              </Card>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}