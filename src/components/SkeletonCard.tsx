
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkeletonCard = () => {
  return (
    <Card className="rounded-3xl shadow-xl flex flex-col">
      <div className="flex-grow">
        <CardHeader className="text-center items-center px-8 pt-8">
          <Skeleton className="h-20 w-20 rounded-full mb-4" />
          <Skeleton className="h-6 w-4/5 mb-2" />
          <Skeleton className="h-4 w-3/5" />
        </CardHeader>
        
        <CardContent className="space-y-4 px-8">
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-4/6 mx-auto" />
          </div>
          <div className="pt-2">
             <Skeleton className="h-8 w-1/2 mx-auto" />
          </div>
        </CardContent>
      </div>
      
      <CardContent className="pt-4 pb-8 px-8">
        <Skeleton className="h-12 w-full rounded-2xl" />
      </CardContent>
    </Card>
  );
};

export default SkeletonCard;
