
type NumberedListItemProps = {
  number: number;
  children: React.ReactNode;
}

export function NumberedListItem({ number, children }: NumberedListItemProps) {
  return (
    <li className="flex items-start">
      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
        {number}
      </span>
      <span>{children}</span>
    </li>
  );
};