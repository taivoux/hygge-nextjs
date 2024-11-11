import CheckoutBtn from "@/components/BtnPrimary"

export default async function Page({
    params,
  }: {
    params: Promise<{ id: string }>
  }) {
    const id = (await params).id
    return (
        <>
        <div>My Post: {id}</div>
        <CheckoutBtn name="Thanh Toán" link="/thanh-cong"/>
        </>
    )
}

// export async function generateStaticParams() {
//     const posts = await fetch('https://.../posts').then((res) => res.json())
   
//     return posts.map((post) => ({
//       id: post.id,
//     }))
// }