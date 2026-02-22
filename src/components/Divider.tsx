export function Divider({ ornament = true }: { ornament?: boolean }) {
  if (!ornament) {
    return <hr className="border-t border-border my-8" />;
  }
  return (
    <div className="flex items-center gap-4 my-8">
      <hr className="flex-1 border-t border-border" />
      <span className="text-dim text-sm select-none">&sect;</span>
      <hr className="flex-1 border-t border-border" />
    </div>
  );
}
