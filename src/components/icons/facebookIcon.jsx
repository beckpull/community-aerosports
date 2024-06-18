import { FaFacebookF } from 'react-icons/fa';
import { Button } from "@/components/ui/button";

export default function FacebookIcon() {
  return (
    <Button variant="outline" size="icon">
      <FaFacebookF className="h-4 w-4" />
    </Button>
  )
}