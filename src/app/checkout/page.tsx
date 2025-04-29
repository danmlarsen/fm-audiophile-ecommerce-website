import CartSummary from "../../components/cart/cart-summary";

export default function CheckoutPage() {
  return (
    <section>
      <div className="grid grid-cols-[1fr_350px]">
        <div>checkout form</div>
        <aside className="p-8">
          <CartSummary />
        </aside>
      </div>
    </section>
  );
}
