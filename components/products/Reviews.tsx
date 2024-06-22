import { getI18n } from "@/locales/server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { FaRegCircleUser } from "react-icons/fa6";
import Image from "next/image";
import ReviewsForm from "./ReviewsForm";

const getReviews = async (id: number) => {
  const reviews = await sql`select * from reviews where ref_product = ${id}`;
  return reviews.rows ? reviews.rows : [];
};

export default async function Reviews(props: { id: number }) {
  const session = await getSession();
  const user = session?.user;
  const userImage = user?.picture;
  const t = await getI18n();

  const submitForm = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string | null;
    const text = formData.get("text") as string | null;
    const refProduct = formData.get("id") as string | null;
    const image = userImage || "";

    if (name && text && refProduct) {
      await sql`insert into reviews (name, text, ref_product, image) values (${name}, ${text}, ${parseInt(
        refProduct
      )}, ${image})`;
    }

    revalidatePath("/");
  };

  const data = await getReviews(props.id);

  return (
    <section className="w-11/12 lg:w-1/2 py-6 md:py-12 lg:py-16">
      <div className="container grid items-start gap-6 lg:grid-cols-1">
        <div className="border-b-2 border-gray-300 pb-4 mb-4">
          <p className="text-lg font-bold text-btn-primary-color md:text-xl my-3 lg:my-4">
            {t("reviews")}
          </p>
        </div>

        {data && data.length > 0 ? (
          data.map(({ id, name, text, image }) => (
            <div key={id} className="pb-4 flex items-start gap-4">
              {image ? (
                <Image
                  src={image}
                  alt={name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <FaRegCircleUser className="w-12 h-12 text-btn-primary-color" />
              )}
              <div>
                <p className="font-bold text-base md:text-lg">{name}</p>
                <p className="text-zinc-400">{text}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="font-bold">{t("noReviews")}</p>
        )}
      </div>

      {user && (
        <div className="my-8 lg:mt-16">
          <div className="border-b-2 border-gray-300 pb-4 mb-4">
            <p className="text-lg md:text-xl font-semibold text-btn-primary-color mb-6 text-justify">
              {t("postReview")}
            </p>
          </div>
          <ReviewsForm submitForm={submitForm} id={props.id} />
        </div>
      )}
    </section>
  );
}
