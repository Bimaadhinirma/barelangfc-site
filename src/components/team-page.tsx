import { Card, CardContent, CardFooter } from "./ui/card"
import { Badge } from "./ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { Image } from "astro:assets";
import type { CollectionEntry } from "astro:content"
import { Link } from "./link"
import Gmail from "./icons/Gmail.astro"
import LinkedIn from "./icons/LinkedIn.astro"
import Instagram from "./icons/Instagram.astro"
import GitHub from "./icons/GitHub.astro"
interface Props {
  item: CollectionEntry<"teamMember">[];
}
  export default function TeamPage({ item }: Props) {
    const years = item.map(({data})=>data.angkatan.getFullYear());
    const yearsUnique = years.filter((value, index, array) => array.indexOf(value) === index);
    return (
      <div>
        <div className="space-y-4 text-center mb-10">
          <h1 className="text-4xl font-bold">Our Team</h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            Meet the brilliant minds behind our robotics innovations
          </p>
        </div>
        <Tabs defaultValue={yearsUnique[0]?.toString()} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
              {yearsUnique.map((year) => (
                <TabsTrigger key={year} value={year.toString()} className="text-sm">
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        
        
        {yearsUnique.map((year) => (
          <TabsContent key={year} value={year.toString()} className="mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {item
          .filter(({data}) => data.angkatan.getFullYear()===year)
          .map(({id, data}) => (
            <Card key={id} className="overflow-hidden py-0">
              <div className="relative aspect-square">
                <img src={data.image} alt={data.name} /*fill*/ className="object-cover" />
                <div className="absolute top-2 right-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                    data.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-red-800"
                  }`}
                >
                  {data.status}
                </span>
              </div>
              </div>  
              <CardContent className="p-4">
                <h3 className="font-bold text-lg mb-1">{data.name}</h3>
                <p className="text-sm text-black-500 mb-2">{data.nim}</p>
                <p className="text-sm text-gray-500 mb-2">{data.role} | {year.toString()}</p>
                <Badge variant="secondary" className="mb-3 font-bold text-s">
                 {data.division.toString()}
                </Badge>
                <p className="text-sm text-gray-600 line-clamp-3">{data.bio}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex justify-between">
                
                  <Link variant={ "outline" } href={`/team/${id}`}>View Profile</Link>
                
                
              </CardFooter>
            </Card>
          ))}
        </div>
      </TabsContent>
      ))}
      </Tabs>
      </div>
    )
  }