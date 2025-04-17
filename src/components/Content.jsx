export default function Content({ content }) {
    return (
        <div className="flex flex-col items-start gap-2 border p-4 rounded-lg shadow-md">
            <div className="relative w-full">
                <img
                    className="w-full rounded-[10px]"
                    src={content.img}
                    alt={content.title}
                />
                <span className="absolute top-2 left-2 text-[12px] text-[#d7fa00] border border-[#d7fa00] px-[4px] py-[2px] rounded-[3px] bg-black bg-opacity-60">
          모집중
        </span>
            </div>
            <div className="w-full">
                <div className="text-lg font-semibold">{content.title}</div>
                <p className="text-sm text-gray-500">{content.subtitle}</p>
            </div>
        </div>
    );
}