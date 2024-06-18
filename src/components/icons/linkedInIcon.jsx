import { FaLinkedinIn } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

export default function LinkedinButtonIcon() {
    return (
      <Button variant="outline" size="icon">
        <FaLinkedinIn className="h-4 w-4" />
      </Button>
    )
  }