import { useState } from "react";
import { usePreline } from "../../hooks/usePreline";

export function NoteForm() {
  usePreline();

  const [categories] = useState([
    {
      value: "work",
      label: "Pekerjaan",
    },
    {
      value: "personal",
      label: "Personal",
    },
    {
      value: "study",
      label: "Belajar",
    },
    {
      value: "project",
      label: "Proyek",
    },
    {
      value: "idea",
      label: "Ide",
    },
    {
      value: "meeting",
      label: "Meeting",
    },
    {
      value: "todo",
      label: "To-Do",
    },
  ]);

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [title, setTitle] = useState("");

  return (
    <>
      <form action="" className="space-y-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="">
            <label
              htmlFor="input-title"
              className="block text-sm font-medium mb-2 dark:text-white">
              Title
            </label>
            <input
              type="text"
              id="input-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="py-2.5 sm:py-3 px-4 block w-full border-gray-200 rounded-lg sm:text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              placeholder="Masukkan judul catatan"
            />
          </div>
          <div className="">
            <label
              htmlFor="tags-select"
              className="block text-sm font-medium mb-2 dark:text-white">
              Tags/Kategori
            </label>
            <select
              id="tags-select"
              multiple={true}
              value={selectedTags}
              onChange={(e) => {
                const values = Array.from(
                  e.target.selectedOptions,
                  (option) => option.value
                );
                setSelectedTags(values);
              }}
              data-hs-select='{
  "placeholder": "Pilih kategori...",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
  "optionClasses": "py-2 px-2 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-hidden focus:bg-gray-100 hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
  "mode": "tags",
  "wrapperClasses": "relative ps-0.5 pe-9 min-h-11.5 flex items-center flex-wrap text-nowrap w-full border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
  "tagsItemTemplate": "<div class=\"flex flex-nowrap items-center relative z-10 bg-blue-100 border border-blue-200 rounded-full px-3 py-1 m-1 dark:bg-blue-900/30 dark:border-blue-700\"><div class=\"size-4 me-1.5\" data-icon></div><div class=\"whitespace-nowrap text-blue-800 dark:text-blue-200 text-xs font-medium\" data-title></div><div class=\"inline-flex shrink-0 justify-center items-center size-4 ms-1.5 rounded-full text-blue-600 bg-blue-200 hover:bg-blue-300 focus:outline-hidden focus:ring-2 focus:ring-blue-400 text-xs dark:bg-blue-800 dark:hover:bg-blue-700 dark:text-blue-300 cursor-pointer\" data-remove><svg class=\"shrink-0 size-2.5\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M18 6 6 18\"/><path d=\"m6 6 12 12\"/></svg></div></div>",
  "tagsInputId": "hs-tags-input",
  "tagsInputClasses": "py-2.5 sm:py-3 px-2 min-w-20 rounded-lg order-1 border-transparent focus:ring-0 sm:text-sm outline-hidden dark:bg-neutral-900 dark:placeholder-neutral-500 dark:text-neutral-400",
  "optionTemplate": "<div class=\"flex items-center\"><div class=\"size-6 me-2\" data-icon></div><div><div class=\"text-sm font-medium text-gray-800 dark:text-neutral-200\" data-title></div></div><div class=\"ms-auto\"><span class=\"hidden hs-selected:block\"><svg class=\"shrink-0 size-4 text-blue-600\" xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" viewBox=\"0 0 16 16\"><path d=\"M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z\"/></svg></span></div></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}'
              className="hidden">
              <option value="">Pilih</option>
              {categories.map((category) => (
                <option key={category.value} value={category.value}>
                  {category.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </>
  );
}
