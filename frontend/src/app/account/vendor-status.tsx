import Text from "@/components/atoms/text";

const VendorStatus = () => {
  return (
    <div className="flex flex-col p-4">
      <Text size="m" thin>
        Vendor Level:
        <Text bold>4</Text>
      </Text>
      <Text thin>
        Sales Amount:
        <Text bold>40</Text>
      </Text>
      <Text thin>
        Items sold:
        <Text bold>4</Text>
      </Text>
      <Text thin>
        Disputes:
        <Text bold>0</Text>
      </Text>
      <Text thin>
        Average Rating:
        <Text bold>4</Text>
      </Text>
    </div>
  );
};

export default VendorStatus;
