export function Card({firstName, lastName}: {firstName: string, lastName: string}) {
  return (
    <div aria-label="member card"  style={{border:'solid 1px #000', padding:20}}>
      <h1>{firstName} {lastName}</h1>
    </div>
  )
}
