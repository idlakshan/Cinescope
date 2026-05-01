export default function Footer() {
  return (
    <footer className="w-full border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-4 text-sm text-muted-foreground">
        © {new Date().getFullYear()} My App. All rights reserved.
      </div>
    </footer>
  );
}
