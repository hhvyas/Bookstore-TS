export default function getUpdatedgenre(currentgenres: string[], event: React.FormEvent<HTMLInputElement>){
    let updategenres = currentgenres;
    if (currentgenres.includes(event.currentTarget.value)) {
      updategenres = currentgenres.filter(
        (genre) => genre !== event.currentTarget.value
      );
    } else {
      updategenres = [...currentgenres, event.currentTarget.value];
    }
    return updategenres
  }