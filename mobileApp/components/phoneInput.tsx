import React, { useState } from "react";
import { XStack, Input, Select, Sheet, Adapt } from "tamagui";

const countryCodes = [
  { code: "+1", flag: "🇺🇸", name: "United States" },
  { code: "+44", flag: "🇬🇧", name: "United Kingdom" },
  { code: "+91", flag: "🇮🇳", name: "India" },
  { code: "+86", flag: "🇨🇳", name: "China" },
  { code: "+81", flag: "🇯🇵", name: "Japan" },
  { code: "+82", flag: "🇰🇷", name: "South Korea" },
  { code: "+49", flag: "🇩🇪", name: "Germany" },
  { code: "+33", flag: "🇫🇷", name: "France" },
  { code: "+34", flag: "🇪🇸", name: "Spain" },
  { code: "+39", flag: "🇮🇹", name: "Italy" },
  { code: "+7", flag: "🇷🇺", name: "Russia" },
  { code: "+54", flag: "🇦🇷", name: "Argentina" },
  { code: "+55", flag: "🇧🇷", name: "Brazil" },
  { code: "+52", flag: "🇲🇽", name: "Mexico" },
  { code: "+1", flag: "🇨🇦", name: "Canada" },
  { code: "+61", flag: "🇦🇺", name: "Australia" },
  { code: "+64", flag: "🇳🇿", name: "New Zealand" },
  { code: "+27", flag: "🇿🇦", name: "South Africa" },
  { code: "+234", flag: "🇳🇬", name: "Nigeria" },
  { code: "+254", flag: "🇰🇪", name: "Kenya" },
  { code: "+20", flag: "🇪🇬", name: "Egypt" },
];

export function PhoneInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(
    countryCodes.find((c) => c.code === "+61") || countryCodes[0]
  );

  return (
    <XStack padding='$4' gap='$2'>
      <Select
        value={selectedCountry.code}
        onValueChange={(value) => {
          const selected = countryCodes.find(
            (country) => country.code === value
          );
          if (selected) {
            setSelectedCountry(selected);
          }
        }}
        defaultValue='+61'
      >
        <Select.Trigger width={110} iconAfter={null}>
          <Select.Value placeholder='select country'>
            {`${selectedCountry.flag} ${selectedCountry.code}`}
          </Select.Value>
        </Select.Trigger>

        <Adapt when='sm' platform='touch'>
          <Sheet modal dismissOnSnapToBottom>
            <Sheet.Frame>
              <Sheet.ScrollView>
                <Adapt.Contents />
              </Sheet.ScrollView>
            </Sheet.Frame>
            <Sheet.Overlay />
          </Sheet>
        </Adapt>

        <Select.Content>
          <Select.ScrollUpButton />
          <Select.Viewport minWidth={110}>
            <Select.Group>
              {countryCodes.map((country, index) => (
                <Select.Item
                  key={`${country.code}-${country.name}`}
                  value={country.code}
                  index={index}
                >
                  <Select.ItemText>
                    {`${country.flag} ${country.code} ${country.name}`}
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton />
        </Select.Content>
      </Select>

      <Input
        flex={1}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder='123 456 789'
        keyboardType='phone-pad'
      />
    </XStack>
  );
}
