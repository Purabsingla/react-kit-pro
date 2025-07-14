import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

function App() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-gray-200">
      <Button variant="destructive">outline</Button>
      <Progress value={73} className="top-40 w-1/2" />
    </div>
  );
}

export default App;
