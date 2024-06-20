import { getI18n } from "@/locales/server";
import { getSession } from "@auth0/nextjs-auth0";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { FaRegCircleUser } from "react-icons/fa6";
const getReviews = async (id: number) => {
  const reviews = await sql`select * from reviews where ref_product = ${id}`;
  return reviews.rows ? reviews.rows : [];
};

export default async function Reviews(props: { id: number }) {
  const session = await getSession();
  const user = session?.user;
  const userName = user?.nickname;
  const t = await getI18n();
  const submitForm = async (formData: FormData) => {
    "use server";
    const name = formData.get("name") as string | null;
    const text = formData.get("text") as string | null;
    const refProduct = formData.get("id") as string | null;

    if (name && text && refProduct) {
      await sql`insert into reviews (name, text, ref_product) values (${name}, ${text}, ${parseInt(
        refProduct
      )})`;
    }

    revalidatePath("/");
  };

  const data = await getReviews(props.id);

  return (
    <section className="w-11/12 lg:w-1/2 py-6 md:py-12 lg:py-16">
      <div className="container grid items-start gap-6 lg:grid-cols-1 ">
        <p className="text-lg font-semibold text-btn-primary-color md:text-xl  dark:text-zinc-50 my-3 lg:my-4">
          {t("reviews")}
        </p>

        {data && data.length > 0 ? (
          data.map(({ id, name, text }) => (
            <div key={id} className="border-2 rounded-lg p-2 border-gray-500">
              <p className="font-semibold text:base md:text-lg ">{name}</p>
              <p className="text-zinc-400">{text}</p>
            </div>
          ))
        ) : (
          <p className="font-bold "> {t("noReviews")}</p>
        )}
      </div>

      {user && (
        <div className="my-8 lg:mt-16">
          <p className=" text-lg md:text-xl font-semibold text-zinc-900 dark:text-zinc-50 mb-6">
            {t("postReview")}
          </p>
          <form action={submitForm}>
            <div className="flex items-center text-btn-primary-color">
              <FaRegCircleUser />
              <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={userName || ""}
                readOnly
                className=" bg-transparent text-sm  block w-full p-2.5 outline-none"
              />
            </div>
            <br />
            <textarea
              placeholder={t("writeReview")}
              name="text"
              className="border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 outline-none"
            ></textarea>
            <input type="hidden" value={props.id} name="id" />
            <button
              type="submit"
              className="bg-transparent dark:text-white text-btn-primary-color border-btn-primary-color font-semibold dark:hover:text-white py-2 px-4 border dark:border-white rounded mt-5 hover:bg-btn-primary-color hover:text-white"
            >
              {t("send")}
            </button>
          </form>
        </div>
      )}
    </section>
  );
}
