import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GroupCard } from "@/components/GroupCard";
import { SearchBar } from "@/components/SearchBar";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SAMPLE_GROUPS } from "@/utils/grupos-mock";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const filteredGroups = SAMPLE_GROUPS.filter(group =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCreateGroup = () => {
    toast({
      title: "Próximamente",
      description: "La funcionalidad de crear grupos estará disponible pronto.",
    });
  };

  const handleGroupClick = (groupId: number) => {
    toast({
      title: "Próximamente",
      description: "La vista detallada del grupo estará disponible pronto.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Grupos</h1>
              <p className="mt-1 text-sm text-gray-500">
                Explora y únete a grupos de estudio y actividades
              </p>
            </div>
            <Button onClick={handleCreateGroup} className="shrink-0">
              <Plus className="h-4 w-4 mr-2" />
              Crear grupo
            </Button>
          </div>

          <div className="mb-6 max-w-md">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGroups.map((group) => (
              <GroupCard
                key={group.id}
                name={group.name}
                description={group.description}
                members={group.members}
                category={group.category}
                onClick={() => handleGroupClick(group.id)}
              />
            ))}
          </div>

          {filteredGroups.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500">No se encontraron grupos que coincidan con tu búsqueda.</p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
