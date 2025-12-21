export default function Card({ title, desc, btnText, onClick }: any) {
return (
<div className="border p-4 rounded-xl shadow-sm space-y-2">
<h2 className="text-xl font-semibold">{title}</h2>
<p className="opacity-80">{desc}</p>
{btnText && <button onClick={onClick} className="btn">{btnText}</button>}
</div>
);
}