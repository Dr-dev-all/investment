export default function Setting() {
  const content = (
    <main className=''>
      <section>
        <form>
          <div>
            <label htmlFor='user_plan'>Current plan: </label>
            <input value='basic plan' />
          </div>
          <div>
            <label htmlFor='user_plan'>First Name: </label>
            <input value='user first name' />
          </div>
          <div>
            <label htmlFor='user_plan'>Current plan: </label>
            <input value='basic plan' />
          </div>
        </form>
      </section>
    </main>
  );

  return content;
}
