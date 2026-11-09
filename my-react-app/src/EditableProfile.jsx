import { useState } from 'react'

const initialProfile = {
  name: 'Alice',
  email: 'alice@example.com',
  preferences: {
    theme: 'light',
  },
}

function EditableProfile() {
  const [profile, setProfile] = useState(initialProfile)

  const updateProfileField = (field, value) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      [field]: value,
    }))
  }

  const updateTheme = (theme) => {
    setProfile((currentProfile) => ({
      ...currentProfile,
      preferences: {
        ...currentProfile.preferences,
        theme,
      },
    }))
  }

  return (
    <section>
      <h2>Profile</h2>
      <form>
        <label>
          Name
          <input
            type="text"
            value={profile.name}
            onChange={(event) => updateProfileField('name', event.target.value)}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            value={profile.email}
            onChange={(event) => updateProfileField('email', event.target.value)}
          />
        </label>
        <label>
          Theme
          <select
            value={profile.preferences.theme}
            onChange={(event) => updateTheme(event.target.value)}
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </label>
      </form>
      <pre>{JSON.stringify(profile, null, 2)}</pre>
      <button type="button" onClick={() => setProfile(initialProfile)}>
        Restore initial profile
      </button>
    </section>
  )
}

export default EditableProfile
