import TopNav from "@/components/TopNav";
import ChatSidebar from "@/components/ChatSidebar";
import PreviewArea from "@/components/PreviewArea";

export default function Index() {
  return (
    <div className="w-screen h-screen bg-dark-bg overflow-hidden flex flex-col">
      {/* Top Navigation */}
      <TopNav />
      
      {/* Main Content Area */}
      <div className="flex flex-col lg:flex-row flex-1 overflow-hidden">
        {/* Chat Sidebar */}
        <ChatSidebar />
        
        {/* Preview Area */}
        <PreviewArea />
      </div>
    </div>
  );
}
