import {
    Briefcase,
    FileText,
    Award,
    FolderCog,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import type {CollectionEntry} from "astro:content";
interface Props {
    item: CollectionEntry<"teamMember">;
}

export default function TeamMemberPage({ item }: Props) {
    return <Tabs defaultValue="experience" className="w-full">
        <TabsList>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="awards">Awards</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Briefcase className="mr-2 h-5 w-5" />
                        Experience
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                    {
                        item.data.experience.map(
                                (data, index) => (
                                    <li key={index}>
                                        <h3 className="font-semibold">
                                            {data.position}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {data.company} | {data.period}
                                        </p>
                                    </li>
                                ),
                            )
                    }
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="education">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <FileText className="mr-2 h-5 w-5" />
                        Education
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                    {
                        item.data.education.map(
                                (data, index) => (
                                    <li key={index}>
                                        <h3 className="font-semibold">
                                            {data.degree}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {data.institution} | {data.year}
                                        </p>
                                    </li>
                                ),
                            )
                    }
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="projects">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <FolderCog className="mr-2 h-5 w-5" />
                        Projects
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                    {
                        item.data.projects.map(
                                (data, index) => (
                                    <li key={index}>
                                        <h3 className="font-semibold">
                                            {data.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {data.description}
                                        </p>
                                    </li>
                                ),
                            )
                    }
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>
        <TabsContent value="awards">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5" />
                        Awards and Honors
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-4">
                    {
                        item.data.awards.map(
                                (data, index) => (
                                    <li key={index}>
                                        <h3 className="font-semibold">
                                            {data.name}
                                        </h3>
                                        <p className="text-sm text-gray-500">
                                            {data.organization} | {data.year}
                                        </p>
                                    </li>
                                ),
                            )
                    }
                    </ul>
                </CardContent>
            </Card>
        </TabsContent>
    </Tabs>

}