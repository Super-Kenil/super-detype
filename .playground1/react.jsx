import NewJokeForm from '@/app/new/NewJokeForm'
import { createClient } from '@/utils/supabase/server'

const NewPage = async () => {

  const supabase = await createClient()
  const { data } = await supabase.from('category').select()

  console.info('categories', data)

  const categories = data?.map((category) => ({ value: category.id, label: category.name })) ?? []

  if (!categories?.length) {
    return <h1 className="text-4xl">No Categories found</h1>;
  }

  return (<NewJokeForm categories={categories} />);
}

export default NewPage