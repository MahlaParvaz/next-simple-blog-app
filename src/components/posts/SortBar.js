// import { AdjustmentsIcon } from '@heroicons/react/24/outline';

// const sportOptions = [
//   { label: 'پربازدید ترین', id: 'most' },
//   { label: 'محبوب ترین', id: 'popular' },
//   { label: 'جدید ترین', id: 'newest' },
// ];

const SortBar = () => {
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 items-center ml-4">
        {/* <AdjustmentsIcon className="w-6 h-6" /> */}
        <span className="text-gray-700">مرتب سازی:</span>
      </div>
      <ul className="flex  items-center gap-x-4">
        <li>پربازدید ترین</li>
        <li>محبوب ترین</li>
        <li>جدیدترین</li>
      </ul>
    </div>
  );
};

export default SortBar;
