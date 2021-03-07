class DesignSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :img_src, :ma_code, :mo_code
end
