import { FaInstagram } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

export default function InstagramButtonIcon() {
  return (
    <Button variant="outline" size="icon">
      <FaInstagram className="h-4 w-4" />
    </Button>
  )
}