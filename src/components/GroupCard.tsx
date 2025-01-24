import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, BookOpen } from "lucide-react";

interface GroupCardProps {
  name: string;
  description: string;
  members: number;
  category: string;
  onClick: () => void;
}

export const GroupCard = ({ name, description, members, category, onClick }: GroupCardProps) => {
  return (
    <Card className="w-full hover:shadow-lg transition-shadow animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Badge variant="secondary">{category}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-2 mb-4">{description}</p>
        <div className="flex items-center text-sm text-gray-500">
          <Users className="h-4 w-4 mr-1" />
          <span>{members} miembros</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={onClick} 
          className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90" 
          variant="default"
        >
          Ver grupo
        </Button>
      </CardFooter>
    </Card>
  );
};