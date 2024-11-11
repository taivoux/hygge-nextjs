import CheckoutBtn from "@/components/BtnPrimary";

export default function SuccessPage() {
    return (
      <div>
        <h1>Order Successful</h1>
        <p>Thank you for your order!</p>
        <CheckoutBtn name="Mua Tiếp Hàng" link="/"/>
      </div>
    );
}