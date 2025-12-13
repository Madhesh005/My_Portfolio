
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetails from "@/pages/ProjectDetails";
import Skills from "@/pages/Skills";
import Contact from "@/pages/Contact";
import ListCommands from "@/pages/ListCommands";
import Internships from "@/pages/Internships";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/project/:id" component={ProjectDetails} />
      <Route path="/skills" component={Skills} />
      <Route path="/contact" component={Contact} />
      <Route path="/ls" component={ListCommands} />
      <Route path="/internships" component={Internships} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
