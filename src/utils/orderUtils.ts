import { Order } from '@/interface/types'; // Assuming you have a shared types file
import { useToast } from "@/hooks/use-toast"

export const handleSubmit = async (order: Order, toast: useToast) => {
  try {
    const response = await fetch('http://localhost:3000/api/order/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),s
    });

    if (response.ok) {
      toast({
        title: 'Success',
        description: 'Order created successfully!',
      });
    } else {
      const errorData = await response.json();
      toast({
        title: 'Error',
        description: errorData.error || 'Failed to create order.',
        variant: 'destructive',
      });
    }
  } catch (error) {
    console.error('Error submitting order:', error);
    toast({
      title: 'Error',
      description: 'An unexpected error occurred.',
      variant: 'destructive',
    });
  }
};
