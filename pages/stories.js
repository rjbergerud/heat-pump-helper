const Persona = ({nickname, name, img, challenge, answer, opportunity}) => (
  <div className="max-w-sm space-y-2 rounded bg-gray-50 w-80 p-2">
    <img class="rounded" src={img}/>
    <h3 class="font-semi-bold">{name}</h3>
    <div class="font-light italic text-gray-700 border-l-2 pl-4">{challenge}</div>
    <div>{answer}</div>
  </div>
)

const data = [{
  nickname: "Can't find an installer",
  name: "Mary",
  img: "http://via.placeholder.com/150",
  challenge: "Called up four numbers, and they’re all busy or tried to convince me to install a gas furnace",
  answer: "Try finding an HVAC/furnace installer who exclusively installs heat pump if one exists in your area",
  opportunity: "Could be a business opportunity in this area for heat pump installations."
}, {
  nickname: "It's winter and my furnace just broke",
  name: "Colin",
  img: "http://via.placeholder.com/150",
  challenge: "Don't want to pay for space heaters and have a cold house while I wait for an installation",
  answer: "This is a challenging situation.  Often, when faced with a need to make a quick decision, we’re more likely to go with what we’re familiar with.",
opportunity: "The goal for heat pump installers should be to be at the front of mind when this happens, and also have an ease of installation that matches that of gas furnaces. Need to work on ways to target sales to people with aging furnaces, and get installs done before they break, or get a service call to a gas/oil furnace technician who might offer a replacement of the same."
}, {
  nickname: "Left me hanging",
  name: "Edith",
  img: "http://via.placeholder.com/150",
  challenge: `Contractor said they’d take care of the rebates, and haven’t been responsive since they finished the installation.`
}]

export default function StoriesPage() {
  return (
    <div class="center lg:w-max">
      <h1 class="text-4xl mb-6">Your stories</h1>
      <div class="text-lg font-light">
        We've been collecting stories trying to find the biggest barriers people
      face when trying to install heat pumps.  After a number of discussions and interviews with homeowners from across the US and Canada
      several common challenges began to emerge.
      </div>
      <div className="flex space-x-4 justify-items-center">
      {data.map(persona_data => {return (
          <Persona {...persona_data} />
        )
      })
      }
      </div>
  </div>
)
}
