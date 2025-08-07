import { ProductDetailsComponent } from "@/components/product-details";
import { RemoteComponent } from 'remote-components/next';

export default function ProductDetailsPage() {
  return <RemoteComponent><ProductDetailsComponent /></RemoteComponent>;
}